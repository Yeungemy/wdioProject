import { $ } from '@wdio/globals'
import Page from '../page.js';

/**
 * login page containing specific selectors and methods
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get selectors () {
        return {
            USER_NAME_INPUT_FIELD: $('#username'),
            PASSWORD_INPUT_FIELD: $('#password'),
            SUBMIT_BTN: $('button[type="submit"]')
        };
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username: string, password: string): Promise<void> {
        await this.selectors.USER_NAME_INPUT_FIELD.setValue(username);
        await this.selectors.PASSWORD_INPUT_FIELD.setValue(password);
        await this.selectors.SUBMIT_BTN.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    async open (): Promise<void> {
        await browser.maximizeWindow();
        await browser.deleteAllCookies();
        
        await super.open('login');
    }

    async teardown(): Promise<void>{
        await browser.closeWindow();
    }
}

const loginPage = new LoginPage();
export {loginPage};
