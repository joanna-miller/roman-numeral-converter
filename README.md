# _{Application Name}_

#### _{Brief description of application}_

#### By _**Jo Miller**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _Clone this repository to your desktop_
* _Navigate to top level of the directory_
* _Open index.html in your browser_

## Known Bugs

* _Any known issues_
* _should go here_

## Specifications
Describe: romanize()

Test: "It returns the 13 basic Roman Numeral combinations that directly correspond to a number"
Expect(romanize(1).toEqual(I))
      (romanize(4).toEqual(IV))
      (romanize(5).toEqual(V))
      (romanize(9).toEqual(IX))
      (romanize(10).toEqual(X))
      (romanize(40).toEqual(XL))
      (romanize(50).toEqual(L))
      (romanize(90).toEqual(XC))
      (romanize(100).toEqual(C))
      (romanize(400).toEqual(CD))
      (romanize(500).toEqual(D))
      (romanize(900).toEqual(CM))
      (romanize(1000).toEqual(M))


Test: "It returns the correct Roman Number for any number submitted"
Expect(romanize(3999).toEqual(MMMCMXCIX))

## License

[MIT](LICENSE.txt)

## Contact Information

_Jo Miller: joannamiller@gmail.com_
