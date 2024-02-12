package com.ams.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class UserAddBooking {
	 
	    

	    @Test
	    public void AddBooking() {
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
		        driver.findElement(By.id("bookingId")).sendKeys("89");
		        driver.findElement(By.id("userId")).click();
		        driver.findElement(By.id("userId")).sendKeys("789");
		        driver.findElement(By.id("flightNo")).click();
		        driver.findElement(By.id("flightNo")).sendKeys("56788");
		        driver.findElement(By.id("travellingDate")).click();
		        driver.findElement(By.id("travellingDate")).click();
		        driver.findElement(By.id("travellingDate")).click();
		        driver.findElement(By.id("travellingDate")).sendKeys("0007-06-04");
		        driver.findElement(By.id("noOfTickets")).click();
		        driver.findElement(By.id("noOfTickets")).sendKeys("1");
		        driver.findElement(By.name("booknow")).click();
	    }
	    public static void main(String[] args) {
			
		}
}
