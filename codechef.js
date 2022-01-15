const puppeteer = require('puppeteer')
const router = require('express').Router()
let id=""

// const ITEM_URL=`https://www.codechef.com/users/${id}`
const details = async () => {
    console.log(id);
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setDefaultNavigationTimeout(0); 
    await page.goto(`https://www.codechef.com/users/${id}`,{waitUntil:'networkidle2'})

    // const name = await page.$eval('.m-username--link',el=>el.innerText)
    // const rating = await page.$eval('.rating-number',el=>el.innerText)
    // const name = await page.evaluate(()=> document.querySelector("body > main > div > div > div > div > div > section.user-details > ul > li:nth-child(1) > span > span.m-username--link"));
    // const rating = await page.evaluate(()=> document.querySelector("body > main > div > div > div > aside > div.widget.pl0.pr0.widget-rating > div > div.rating-header.text-center > div.rating-number"));
    // const highest_rating = await page.evaluate(() => document.querySelector("body > main > div > div > div > aside > div.widget.pl0.pr0.widget-rating > div > div.rating-header.text-center > small"))
    // await browser.close()
    // return [name && name.textContent,rating && rating.textContent,highest_rating && highest_rating.textContent]; 
    
    if(id!==""){
        const name = await page.evaluate(()=> document.querySelector("body > main > div > div > div > div > div > section.user-details > ul > li:nth-child(1) > span > span.m-username--link").textContent);
        const rating = await page.evaluate(()=> document.querySelector("body > main > div > div > div > aside > div.widget.pl0.pr0.widget-rating > div > div.rating-header.text-center > div.rating-number").textContent);
        const highest_rating = await page.evaluate(() => document.querySelector("body > main > div > div > div > aside > div.widget.pl0.pr0.widget-rating > div > div.rating-header.text-center > small").textContent)
        await browser.close()
        return {name,rating,highest_rating}; 
    }
    else return {};
}


router.get('/details/:id',async (req,res)=>{
    
    id=req.params.id
    const data = await details()
    res.send(data) 
})

details().then(console.log)
 
router.get('/',(req,res)=>{
    details().then((data)=>{
        res.send(data)
    })
})

module.exports = router;