import React from 'react'
import image1 from './assets/01.jpg';
import image2 from './assets/02.jpg';
import image3 from './assets/03.jpg';
import image4 from './assets/04.jpg';
import './Aptitude_tabs.css'

export function Cs_Fundamentals() {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <h1>CS Fundamentals</h1>
                <p>In a computer science interview, your answers to the general and technical questions will be a major factor in your selection for the role. Most of the questions will be based on coding, programming languages, operating systems, computer hardware and software, and other computer system topics.</p>
                <p>Why we need to study the basic of computer fundamentals and its concept?
                    A person with a basic understanding of computers and software has an easier time solving problems they may have encountered.
                </p>
            </div>
            <div className='col-md-6'>
                <img className='apti_img' src={image1} alt=''/>
            </div>
        </div>
    )
}

export function Cs_languages() {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <h1>CS Languages</h1>
                <p>C, C++, Java these are most commonly used Computer Languages and the theory concepts realted to these languages are mostly asked in aptitude tests of start up companies. These questions are very tricky one and more practice over these questions can make it possible to crack the aptitude</p>
                <p>The Output based Questions are most complicated but the simple observation can make it easier to understand the actual answer for the code. also it helps to build your theory Knowledge and use it in a more practical way</p>
            </div>
            <div className='col-md-6'>
                <img className='apti_img' src={image2} alt=''/>
            </div>
        </div>
    )
}

export function Coding_ques() {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <h1>Coding questions</h1>
                <p>The coding Questions are sorted according to the difficulty level of company. These are from easy-Medium-hard category.<br/>10 Skills Necessary for Coding</p>
                <ol>
                    <li>Self-Reliance. This one is huge. ...</li>
                    <li>Language. It may seem obvious, but in order to write code, you'll have to learn at least one programming or scripting language.....</li>
                    <li>Attention to Detail. ...</li>
                    <li>Recognition of Stupidity. ...</li>
                    <li>Abstract Thinking. ...</li>
                    <li>Patience. ...</li>
                    <li>Strong Memory. ...</li>
                    <li>Scientific Method.</li>
                </ol>
            </div>
            <div className='col-md-6'>
                <img className='apti_img' src={image3} alt=''/>
            </div>
        </div>
    )
}

export function Gen_aptitude() {
    return (
        <div className='row'>
            <div className='col-md-6'>
                <h1>General aptitude</h1>
                <p>Better Knowledge of Your Strengths and Weaknesses Aptitude tests give you a better understanding of yourself. They are designed to reveal your strengths and weaknesses and give you a better understanding of your personality. This is important for your professional development. It may also highlight your hidden talents.</p>
                <p>What is aptitude and its importance?<br/>Aptitude is a very important aspect of a person's life. By aptitude, we usually refer to Quantitative aptitude – that basically judges our analytical and problem solving skills. ... The idea is to judge your problem-solving and decision-making skills – which are vital to your academic/professional performance at large.</p>
            </div>
            <div className='col-md-6'>
                <img className='apti_img' src={image4} alt=''/>
            </div>
        </div>
    )
}

