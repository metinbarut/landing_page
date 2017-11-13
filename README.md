# devportal
Dev portal provides following feature:
1) User Registration : Java Script Client let partners to register their email to mimik eddeSDK servers.
2) Release Downlaod : Partner landed to release download page in where, they can select and download the edgeSDK package32) 3) License : User registration flows sends the license file to partner as an attachment to an e-mail including instructions.
4) How to : README file includes how to use the package with sample codes
User Registration :
Partners/developers  visits mimik dev portal page https://mimikgit.github.io/devportal/
Enters Name, Surname, email and password information to register their account to mimik edgeSDK
Browser checks the content and send it to the backend ( amazon cloud ubuntu IP: 52.34.122.227:8000 )
Nodejs backend first creates user and gets account id from mID production servers
Creates license id wirh partners account ID and sends an email  ( including license key ) by using Amazon SMTP SES service
The license file is also backed up under bak directory with email identifier, if needed
Browser is forwarded to another page for instructions and download the edgeSDK
In case of error occurs, alert message is displayed with error description
The partner can download the edgeSDK and copy the license file under download directory and then start using it with email and password that they used for registration
