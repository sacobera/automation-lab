import { Builder, Capabilities, By } from "selenium-webdriver"

const {chromedriver} = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/exercises/automation/movieList/index.html/')
})

afterAll(async () => {
    await driver.quit()
})

test('I can add Movies', async () => {
    let searchBar = await driver.findElement(By.id('Add Movies').sendkeys("Moana");
    let addBtn = await driver.findElement(By.button('Add')).submit()
    

    // await searchBar.sendKeys('Moana\n')

    // await addBtn.click('Moana\n')
    // await driver.sleep(5000)