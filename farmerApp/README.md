login: http://127.0.0.1:8000/api/register/login/

send in body 
{
    "email": "godfatherg324@gmail.com",
    "password":"12345"
}

register: http://127.0.0.1:8000/api/register/user_register/
send in body
{
    "phone_no": "9819829975",
    "first_name":"Ayush",
    "email": "godfatherg324@gmail.com",
    "password":"12345",
    "address":"7th street london",
    "zip_code":400068,
    "role":"Buyer"
}

upload product: http://127.0.0.1:8000/api/farmer/list_product/
send in body 
{
    "product_name": ,
    "unit_price": ,
    "quantity": ,
    "unit": ,
    "harvest_date": ,
    "image":
}


search product: http://127.0.0.1:8000/api/buyer/search/?search=Mango

send search parameter in query


place order: 