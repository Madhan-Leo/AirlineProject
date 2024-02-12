package com.ams.seleniumtest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

public class UserRegister {
	 
	    

	    @Test
	    public void register() {
	    	 WebDriver driver;
	 	    
	 	    
		        System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
		        driver = new ChromeDriver();
		        driver.navigate().to("http://localhost:4200/");
		        
		       
		        driver.findElement(By.linkText("Register")).click();
		        driver.findElement(By.id("userId")).click();
		        driver.findElement(By.id("userId")).sendKeys("78");
		        driver.findElement(By.id("userName")).click();
		        driver.findElement(By.id("userName")).sendKeys("aravinds");
		        driver.findElement(By.id("userPassword")).click();
		        driver.findElement(By.id("userPassword")).sendKeys("aravinds");
		        driver.findElement(By.id("userPhoneno")).click();
		        driver.findElement(By.id("userPhoneno")).sendKeys("8798765678");
		        driver.findElement(By.id("userEmail")).click();
		        driver.findElement(By.id("userEmail")).sendKeys("aravind@gmail.com");
		        driver.findElement(By.id("userType")).click();
		        
		        {
		            WebElement dropdown = driver.findElement(By.id("userType"));
		            dropdown.findElement(By.xpath("//option[. = 'User']")).click();
		          }
		        
		        driver.findElement(By.id("register")).click();
	    }
	    public static void main(String[] args) {
			
		}
}
