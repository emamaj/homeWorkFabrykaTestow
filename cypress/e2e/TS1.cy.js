import InputPage from '../page-objects/inputPage'
import HomePage from '../page-objects/homePage'
import CheckBoxPage from '../page-objects/checkboxPage'
import DropDownListPage from '../page-objects/dropDownListPage'
import HoverPage from '../page-objects/hoverPage'
import DatePickerPage from '../page-objects/datePicker'
import BasicAuthPage from '../page-objects/basicAuthPage'
import FormPage from '../page-objects/formPage'
import { func } from 'joi'
import KeyPressPage from '../page-objects/keyPressPage'
import DragAndDropPage from '../page-objects/dragAndDropPage'
import AddAndRemoveElements from '../page-objects/addAndRemoveElementsPage'
import StatusCodePage from '../page-objects/statusCodePage'
import IFramePage from '../page-objects/iFramePage'

describe('inputs test', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('test inputs', function () {

        const homePage = new HomePage();
        homePage.clickInputTab()


        const inputPage = new InputPage();
        inputPage.typeNumberIntoField()
        inputPage.typeLettersIntoField()
} )

    it('checkbox test', function () {

        const homePage = new HomePage();
        homePage.clickCheckboxesTab()

        const checkboxPage = new CheckBoxPage();
        checkboxPage.clickFirstCheckbox()
        checkboxPage.clikLastCheckbox()
    })

    it('test dropdown list', function () {

        const homePage = new HomePage();
        homePage.clickDropdownListTab()

        const dropDownList = new DropDownListPage();
        dropDownList.chooseDropDownListFirstOption()
    })

    it('test hover element', function () {

        const homePage = new HomePage();
        homePage.clickHoverTab()

        const hoverPage = new HoverPage();
        hoverPage.hoverOverElement()
    })

    it('test date picker', function() {

        const homePage = new HomePage();
        homePage.clickDatePickerPage()

        const datePickerPage = new DatePickerPage();
        datePickerPage.typeDatePicker()
    })

    it('test basic login authorisation', function() {

        const homePage = new HomePage();
        homePage.clickBasicAuth()

        const basicAuthPage = new BasicAuthPage();
        basicAuthPage.emptyInputAuth();
        basicAuthPage.emptyPasswordInput();
        basicAuthPage.negativeLoginAuth();
        basicAuthPage.positiveLoginAuth();
        basicAuthPage.returnToHomePage()

    })

    it('test form page', function(){
        
        const homePage = new HomePage();
        homePage.clickFormHeader()

        const formPage = new FormPage
        formPage.onFormSubmit()
    })

    it('test key press page', function (){

        const homePage = new HomePage();
        homePage.clickKeyPressForm()

        const keyPressPage = new KeyPressPage();
        keyPressPage.checkKeyPressResult()
    })

    it('test drag and drop page', function() {

        const homePage = new HomePage()
        homePage.clickdragAndDropForm()

        const dragDropPage = new DragAndDropPage()
        dragDropPage.dragColumnA()
    })

    it('test add and remove element', function() {

        const homePage = new HomePage()
        homePage.clickAddRemoveElementHeader()

        const addRemoveElement = new AddAndRemoveElements()
        addRemoveElement.clickAddElementButton(),
        addRemoveElement.clickRemoveElementButton()
    })

    it('test status code page', function() {

        const homePage = new HomePage()
        homePage.clickStatusCodePage()

        const statusPage = new StatusCodePage
        statusPage.checkStatusCode200(),
        statusPage.checkStatusCode305(),
        statusPage.checkStatusCode404(),
        statusPage.checkStatusCode500
    })

    it('test iFrame page', function() {

        const homePage = new HomePage()
        homePage.clickIFrameElement()

        const iFramePage = new IFramePage()
        iFramePage.pressButtonOne()
        iFramePage.pressButtonTwo()
    })

})
