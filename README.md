> # Internet Connection-Status-Deductor-Application.

### What i do on this application.
---
* In this file there are two application is there 
    * testing purpose,
    * Real application.

_in the Testing purpose i simply checking internet connected or not by using globle window object._ 
```
window.addEventListener("load",(event)=>{
    });
```
_but one disadvantage is if i connect dommy wifi its showing online so that i was creating anther application_

---
_Real application is deducting the real time means, if the internet connected only its showing online then after 1s conforming some msg other wise its showing offline_

_so that what i doing randomly taking online live img then using api fetch that img. if img properly working my application showing online other wise its showing offline._

```
async function connectionStatus() {
    try {
      const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/Lenna_%28test_image%29.png/440px-Lenna_%28test_image%29.png?time=' + (new Date()).getTime());
    } catch (error) {
      console.error(error);
    }
  }

  ```

  **[LinkedLn](www.linkedin.com/in/madan-parta "LinkedLn")** 

>###### 👉 if you want to output video see my linkdin profile.
