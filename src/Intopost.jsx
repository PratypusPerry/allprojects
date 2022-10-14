import React,{useState} from 'react'
import './Intopost.css'


const Intopost = () => {
    const [infixval, setfirst] = useState("");
    const [expression, setexpression] = useState("");
    const [Result, setResult] = useState("");
    let stackarr=[];
    let top=-1;
    const push=(e)=>{
        top++;
        stackarr[top]=e;
    }
    const pop=()=>{
        if (top == -1)
        return 0;
    else {
        let popped_ele = stackarr[top];
        top--;
        return popped_ele;
    }
    }
    const operator=(op)=>{
        if (op == '+' || op == '-' ||
        op == '^' || op == '*' ||
        op == '/' || op == '(' ||
        op == ')') {
        return true;
    }
    else
        return false;
    }
    const precedency=(pre)=>{
        if (pre == '@' || pre == '(' || pre == ')') {
            return 1;
        }
        else if (pre == '+' || pre == '-') {
            return 2;
        }
        else if (pre == '/' || pre == '*') {
            return 3;
        }
        else if (pre == '^') {
            return 4;
        }
        else
            return 0;
    }
    const infixToPostfix=()=>{
        let postfix = [];
        let temp = 0;
        push('@');
        for (var i = 0; i < infixval.length; i++) {
            var el = infixval[i];
            if (operator(el)) {
                if (el == ')') {
                    while (stackarr[top] != "(") {
                        postfix[temp++] = pop();
                    }
                    pop();
                }
                else if (el == '(') {
                    push(el);
                }
                else if (precedency(el) > precedency(stackarr[top])) {
                    push(el);
                }
                else {
                    while (precedency(el) <=
                        precedency(stackarr[top]) && top > -1) {
                        postfix[temp++] = pop();
                    }
                    push(el);
                }
            }
            else {
                postfix[temp++] = el;
            }
        }
        while (stackarr[top] != '@') {
            postfix[temp++] = pop();
        }
        var st = "";
    for (var i = 0; i < postfix.length; i++)
        st += postfix[i];
        setexpression(infixval);
        setResult(st);
    }
    
  return (
    <>
        <div className='supDiv'>
        <div className='mainDiv'>
            <div className='workingFields'>
                <input type='text' value={infixval} onChange={(e)=>{setfirst(e.target.value)}}></input>
                <button onClick={()=>infixToPostfix()}>Show Postfix</button>
            </div>
            <div className='showInandPost'>
                {`The infix expression is: ${expression}`}
                <br/>
                {`The postfix expression is: ${Result}`}
            </div>
        </div>
        </div>
    </>
  )
}

export default Intopost