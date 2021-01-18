# Enye Challenge 5.0

Stage 1 challenge

### Purpose

The purpose is to gauge your understanding of working with JSON data with various RESTful APIs. In this challenge, we provide a sample API with a single endpoint and ask you to write some Javascript to request data from the API and transform the response.

### Records API

The provided API below returns a list of profiles with information surrounding e-commerce transaction details.

```bash
https://api.enye.tech/v1/challenge/records

```

API response schema

```json
{
    "records": {
        "profiles": [{
            "FirstName": "",
            "LastName": "",
            "Gender": "",
            "Latitude": "",
            "Longitude": "",
            "CreditCardNumber": "",
            "CreditCardType": "",
            "Email": "",
            "DomainName": "",
            "PhoneNumber": "",
            "MacAddress": "",
            "URL": "",
            "UserName": "",
            "LastLogin": "",
            "PaymentMethod": ""
        }, ...]
    },
    "status": "",
    "size": ""
}
```

### Required Technology

Chose one of the following technologies to build out the frontend portion of this challenge

- [React JS](https://reactjs.org/tutorial/tutorial.html)
- [Vue JS](https://vuejs.org/)

### Tasks

1. Using the Profiles API, create a UI that presents the information intuitively and beautifully
2. Only 20 profiles **must** be listed on a page, so pagination is needed 
3. Your application **must** incorporate two (2) filters to dynamically present the information (i.e. filter by gender, payment method, credit card type, etc.)
4. Your application **must** include a search bar to search for a specific patient
5. Your application front-end **must** be written using ReactJS or VueJS
6. The application **must** be deployed to the web

### Notes

User experience is very important, so be sure to keep the end-users in mind. The more usable, accessible, intuitive, and beautiful your frontend design the better you will be scored.

### Submission

You must submit a link to the client and to the Github code **7 days** after applying to the program. Failure to do so would result in your disqualification.

- [Submission Link](https://airtable.com/shrZUGXL4dCK9v05c)

### Resources

- [React 101](https://reactjs.org/tutorial/tutorial.html)
- [Vue 101](https://vuejs.org/v2/guide/)
- [RESTful API](https://searchapparchitecture.techtarget.com/definition/RESTful-API#:~:text=A%20RESTful%20API%20is%20an,deleting%20of%20operations%20concerning%20resources.)
- [What is JSON?](https://beginnersbook.com/2015/04/json-tutorial/)
- [Top Platforms for App Deployment](https://blog.newrelic.com/engineering/cloud-application-deployment-tools/)
