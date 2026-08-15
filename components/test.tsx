import React from 'react'
// Components: Functional >> Class
//// Hooks, props=args
//// const, let (ignore var)

export default function TestComponent({name, role, age}: {
    name: string, role: string, age: number
}) {
    let namesArr: string[] = ["Abby", "Bob", "Cory"];
    let user: {
        name: string;
        age: number;
    } = {
        name: "Leonardo",
        age: 23
    }
    return (
        <div>
            <h2> Hello! My name is {name} </h2>
            <p>Role: {role}</p>
            <p>Age: {age}</p>
        </div>
  )
}
