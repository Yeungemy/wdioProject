import { browser } from '@wdio/globals'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
     * Wait for the element to be displayed
     */
    async waitForIsShown(ele: WebdriverIO.Element, isShown = true): Promise<boolean> {
        try{
            const result = await $(ele).waitForDisplayed({
                timeout: Number(process.env.WAIT_FOR_TIME_OUT),
                reverse: !isShown
            });

            return !!result;
        } catch (e) {
            return !isShown;
        }
    }

    /**
     * Give back if the element is displayed
     */
    async isDisplayed(ele: WebdriverIO.Element): Promise<boolean> {
        return ele.isDisplayed();
    }

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open (path: string): Promise<void>  {
        await browser.url(path);
    }
}
