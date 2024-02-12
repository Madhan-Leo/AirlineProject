package com.ams.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class UpdateFlight {
	 
	    

	    @Test
	    public void updateFlight() {
	    	 WebDriver driver;
	 	    
	 	    
		        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		        driver = new ChromeDriver();
		        driver.navigate().to("http://localhost:4200/");
		        driver.findElement(By.linkText("Login")).click();
		        driver.findElement(By.cssSelector(".ng-tns-c1205077789-0:nth-child(3)")).click();
		        driver.findElement(By.cssSelector(".ng-tns-c1205077789-0:nth-child(3)")).sendKeys("mahi@gmail.com");
		        driver.findElement(By.cssSelector(".mat-mdc-form-field-infix > .ng-tns-c1205077789-1:nth-child(2)")).click();
		        driver.findElement(By.cssSelector(".mat-mdc-form-field-infix > .ng-tns-c1205077789-1:nth-child(2)")).sendKeys("dhoni");
		        driver.findElement(By.cssSelector(".loginButton")).click();      
//		        driver.findElement(By.cssSelector("a:nth-child(4) > .view")).click();
//		        driver.findElement(By.id("flightNo")).click();
//		        driver.findElement(By.id("flightNo")).sendKeys("10870");
//		        driver.findElement(By.id("flightName")).click();
//		        driver.findElement(By.id("flightName")).sendKeys("Emirates");
//		        driver.findElement(By.id("seatCapacity")).click();
//		        driver.findElement(By.id("seatCapacity")).sendKeys("130");
//		        driver.findElement(By.id("departure")).click();
//		        driver.findElement(By.id("departure")).sendKeys("chennai");
//		        driver.findElement(By.id("arrival")).click();
//		        driver.findElement(By.id("arrival")).sendKeys("Trichy");
//		        driver.findElement(By.id("myForm")).click();
//		        driver.findElement(By.id("duration")).click();
//		        driver.findElement(By.id("duration")).sendKeys("5");
//		        driver.findElement(By.cssSelector(".btn-success")).click();
		      
	    }
	    public static void main(String[] args) {
			
		}
}
