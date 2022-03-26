import React from 'react';
import './Section.css'

const Section = () => {
    return (
        <div className='section-container'>
            <div>
                <h2>1. How does React work?</h2>
                <p className='section-paragraph'>Well, lots of guys have a confusion that, React is a framework. Actually, it's not a framework, it's a JavaScript library. It's has special ability to change our HTML code into JS style. Few reasons why React is Famous nowadays: single page application, no loading issues, create dynamic components by users, world's famous social sites such as Facebook, WhatsApp are depends on that React JS library. It's not only helps us to create single page web application, but also it has ability to create mobile app as well. React employs a declarative approach that makes it easy to reason about your application while also aiming for efficiency and flexibility. It creates basic views for each state in your project, and when your data changes, React updates and renders the appropriate component quickly.</p>
            </div>
            <div>
                <h2>2. How useState works?</h2>
                <p className='section-paragraph'>useState is one of the important hooks in React JavaScript library. useState allows us to have state variables in functional components. React has two type of components: one is same like ES6 components and another one is the functional components. useState in React is asynchronous. As far as I know in my word that, in useState I can do few things such as: first I need to declare a variable and then I need to set that variable. Behind the scene, React library already write a function which one helps us to do those things automatically. useState takes just one argument which is the intial value, and returns a stateful value and a function to change it, we can destructure it like: const [state, setState] = useState(initialValue); For use this, we use it same like the class example.</p>
            </div>
        </div>
    );
};

export default Section;