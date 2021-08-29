const auth = require("./auth")
// @ponicode
describe("handleAuthentication", () => {
    let inst

    beforeEach(() => {
        inst = new auth.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleAuthentication("callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.handleAuthentication(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("storeGraphCoolCred", () => {
    let inst

    beforeEach(() => {
        inst = new auth.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.storeGraphCoolCred("data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.storeGraphCoolCred(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("login", () => {
    let inst

    beforeEach(() => {
        inst = new auth.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.login()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("logout", () => {
    let inst

    beforeEach(() => {
        inst = new auth.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.logout("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.logout("ponicode.com/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.logout("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.logout("https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.logout("https://croplands.org/app/a/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.logout(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isAuthenticated", () => {
    let inst

    beforeEach(() => {
        inst = new auth.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.isAuthenticated()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getProfile", () => {
    let inst

    beforeEach(() => {
        inst = new auth.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.getProfile()
        }
    
        expect(callFunction).not.toThrow()
    })
})
