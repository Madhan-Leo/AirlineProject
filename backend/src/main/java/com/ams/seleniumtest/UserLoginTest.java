package com.ams.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class UserLoginTest {
	 
	    

	    @Test
	    public void userLogin() {
	    	 WebDriver driver;
	 	    
	 	    
		        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		        driver = new ChromeDriver();
		        driver.navigate().to("http://localhost:4200/");
		        
		        driver.findElement(By.linkText("Login")).click();
		        driver.findElement(By.cssSelector(".ng-tns-c1205077789-0:nth-child(3)")).click();
		        driver.findElement(By.cssSelector(".ng-tns-c1205077789-0:nth-child(3)")).sendKeys("raja@gmail.com");
		        driver.findElement(By.cssSelector(".mat-mdc-form-field-infix > .ng-tns-c1205077789-1:nth-child(2)")).click();
		        driver.findElement(By.cssSelector(".mat-mdc-form-field-infix > .ng-tns-c1205077789-1:nth-child(2)")).sendKeys("raja");
		        driver.findElement(By.cssSelector(".loginButton")).click();
	    }
	    public static void main(String[] args) {
			
		}
}
