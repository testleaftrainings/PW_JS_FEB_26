import test from '@playwright/test'

test.beforeAll("Before ALL",async()=>{
    console.log("Storage State")
})

test.beforeEach("Data",async()=>{
    console.log("Json/csv")
})

test("Create Lead",async()=>{
console.log("Create Lead")
})

test("Create Account",async()=>{
    console.log("Create Account")
})

test.afterEach("Status",async()=>{
    console.log("Status")
})

test.afterAll("Report",async()=>{
    console.log("Report")
})