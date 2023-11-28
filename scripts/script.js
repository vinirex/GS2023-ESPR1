Users = []
Admins = []
EPC = 0

class UserID {
    auth = 0;
    constructor(name, password) {
        this.Name = name;
        this.Password = password;
        this.IPC = EPC++;
    }
    authAdmin(){
        this.auth = 1
    }
    authUser(name, age, id, height, weight, biogender, bloodtype, vices, details) {
        this.name = name
        this.age = age
        this.id = id

        this.height = height
        this.weight = weight
        this.biogender = biogender
        this.bloodtype = bloodtype

        this.vices = vices;
        this.details = details;
    }
    scribeField(field, value) {
        if (field == 'name') { this.name = value }
        else if (field == 'age') { this.age = value }
        else if (field == 'id') { this.id = value }
        else if (field == 'height') { this.height = value }
        else if (field == 'weight') { this.weight = value }
        else if (field == 'biogender') { this.biogender = value }
        else if (field == 'bloodtype') { this.bloodtype = value }
        else if (field == 'vices') { this.vices = value }
        else if (field == 'details') { this.details = value }
        else return
    }
}
async function validate(type, input) {
    var value = input
    if(type == 'email')
    {
        if(value.length() > 5 && value.includes('@') && value.includes('.')) { return value }
    }
    if(type == 'str')
    {
        if(value.length() > 5) { return value }
    }
    if(type == 'int')
    {
        if(value > 0) { return value }
    }
    if(type == 'biogender')
    {
        if(value.toLowerCase() != "male" || value.toLowerCase() != "female") { return 'N/A' }
        return value;
    }
    if(type == 'bloodtype')
    {
        if (value.includes('O')) {
            if(value.includes('+'))
            {
                return 'O+'
            } else {
                return 'O-'
            }
        }
        if (value.includes('AB')) {
            if(value.includes('+'))
            {
                return 'AB+'
            } else {
                return 'AB-'
            }
        }
        if (value.includes('B')) {
            if(value.includes('+'))
            {
                return 'B+'
            } else {
                return 'B-'
            }
        }
        if (value.includes('A')) {
            if(value.includes('+'))
            {
                return 'A+'
            } else {
                return 'A-'
            }
        }
    }
}
async function createUser(username, password, name, age, id, height, weight, biogender, bloodtype, vices, details) {
    Users.push(new UserID(username, password).authUser(name, age, id, height, weight, biogender, bloodtype, vices, details))
}
async function createAdmin(username, password) {
    Admins.push(new UserID(username, password).authAdmin())
}