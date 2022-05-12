create_user_schema = {
    'firstname': {'minlength': 3, 'maxlength': 50, 'required': True, 'regex': r'[A-z]+'},
    'lastname': {'minlength': 2, 'maxlength': 50, 'required': True, 'regex': r'[A-z]+'},
    'email': {'maxlength': 128, 'required': True, 'regex': r'^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'},
    'password': {'minlength': 8, 'maxlength': 128, 'required': True, 'regex': r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)['
                                                                              r'a-zA-Z\d]{8,128}$'},
    'new_password': {'minlength': 8, 'maxlength': 128, 'required': False, 'regex': r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)['
                                                                                   r'a-zA-Z\d]{8,128}$'},
}

login_user_schema = {
    'email': {'maxlength': 128, 'required': True, 'regex': r'^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'},
    'password': {'minlength': 8, 'maxlength': 128, 'required': True, 'regex': r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)['
                                                                              r'a-zA-Z\d]{8,128}$'}
}

update_user_schema = {
    'id': {'required': True},
    'firstname': {'minlength': 3, 'maxlength': 50, 'required': True, 'regex': r'[A-z]+'},
    'lastname': {'minlength': 2, 'maxlength': 50, 'required': True, 'regex': r'[A-z]+'},
    'email': {'maxlength': 128, 'required': True, 'regex': r'^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'},
    'password': {'minlength': 8, 'maxlength': 128, 'required': True, 'regex': r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)['
                                                                              r'a-zA-Z\d]{8,128}$'},
    'new_password': {'minlength': 8, 'maxlength': 128, 'required': False, 'regex': r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)['
                                                                                   r'a-zA-Z\d]{8,128}$'},
}

