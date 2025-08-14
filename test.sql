--Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.
SELECT DISTINCT CITY
FROM STATION
WHERE LEFT(CITY, 1) IN ('A','E','I','O','U');

--========================================================================================================================================================================================================
--Query the list of CITY names ending with vowels (a, e, i, o, u) from STATION. Your result cannot contain duplicates.
SELECT DISTINCT CITY
FROM STATION
WHERE RIGHT(CITY, 1) IN ('A','E','I','O','U');

--========================================================================================================================================================================================================
--Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.
SELECT DISTINCT CITY 
FROM STATION 
WHERE LEFT(CITY, 1) IN ('A','E','I','O','U') AND RIGHT(CITY, 1) IN ('A','E','I','O','U')

--========================================================================================================================================================================================================
--Query the Name of any student in STUDENTS who scored higher than  Marks. Order your output by the last three characters of each name. 
--If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.), secondary sort them by ascending ID.
SELECT NAME 
FROM STUDENTS 
WHERE MARKS > 75 
ORDER BY RIGHT(NAME, 3), ID;

--========================================================================================================================================================================================================
--Write a query that prints a list of employee names (i.e.: the name attribute) from the Employee table in alphabetical order.
SELECT NAME FROM EMPLOYEE
ORDER BY NAME

--========================================================================================================================================================================================================
--Write a query that prints a list of employee names (i.e.: the name attribute) 
--for employees in Employee having a salary greater than 2000  per month who have been employees for less than 10 months. 
--Sort your result by ascending employee_id
SELECT NAME 
FROM EMPLOYEE 
WHERE SALARY > 2000 AND MONTHS < 10
ORDER BY EMPLOYEE_ID ASC;

--========================================================================================================================================================================================================
--Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths (i.e.: number of characters in the name). 
--If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically.
SELECT CITY, CHAR_LENGTH(CITY)
FROM STATION
WHERE CHAR_LENGTH(CITY) = (SELECT MIN(CHAR_LENGTH(CITY)) FROM STATION)
ORDER BY CITY ASC LIMIT 1;

SELECT CITY, CHAR_LENGTH(CITY)
FROM STATION
WHERE CHAR_LENGTH(CITY) = (SELECT MAX(CHAR_LENGTH(CITY)) FROM STATION);

--========================================================================================================================================================================================================
--Query a count of the number of cities in CITY having a Population larger than 100000.
SELECT COUNT(NAME) 
FROM CITY 
WHERE POPULATION > 100000

--========================================================================================================================================================================================================
--Query the total population of all cities in CITY where District is California.
SELECT SUM(POPULATION) FROM CITY WHERE DISTRICT = "California"

--========================================================================================================================================================================================================
--Query the average population of all cities in CITY where District is California.
SELECT (SUM(POPULATION) / (COUNT(POPULATION)))
FROM CITY 
WHERE DISTRICT = "California"
