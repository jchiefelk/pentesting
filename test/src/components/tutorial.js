import React from 'react';
import '../css/main.css';

class Tutorial {



		renderTutorial() {


			return(
                    <div style={{position: 'absolute',top: 100}}>

			        		<div style={{display: 'flex',alignItems: 'center', justifyContent: 'center'}}>
			 					<p id="Title">Protecting from SQL Injection</p> 
			 				</div>

                            <p className="paragraph">
                                SQL injection is an old and popular attack strategy used by Hackers to get a website that uses SQL to dump the contents of the database.
                                It is still common in 2017, even though as a developer it is rather straightforward to implement measures to protect against.  Many times a successful
                                SQL-injection attack is the consequence of a either a lazy or time-constrained developer.
                            </p>

                            <p className="paragraph">
                                There are multiple strategies a developer can implement to protect against SQL-injection. Below I will discuss
                                using Prepared Statements with Parameterized Queries.
                            </p>

                            <p className="section-title">
                                Prepared Statements With Parameterized Queries 
                            </p>

                            <p className="paragraph">
                                Prepared statements ensure that a hacker is not able to change the intent of the query.  A hacker 
                                may be able to insert SQL commands, but the effect is limited to executing the SQL code set in the prepared statement.
                            </p>

                            <p className="paragraph">
                                To illustrate the use of prepared statements in Node.js, take a look at the JavaScript below.
                            </p>

                            <div style={{alignItems: 'center',justifyContent: 'center',display: 'flex', marginBottom: 50, marginTop: 50}} >
                                <img style={{height: 300}} src="https://s3-us-west-1.amazonaws.com/cointelmob/github/prepared_post_request.png" />
                            </div>


                            <p className="paragraph">
                                The above statement is a function that returns a promise. Take a look at the locally scoped variables sql and Insert. sql is used to predefine the SQL code.  The question marks
                                '?', represent parameter input.  The Insert array contains the parameters that are passed to the SQL code in place of the question marks, when the promsise 'connect' is executed. 
                            </p>


                            <p className="paragraph">
                                This code can be found here on <a style={{cursor: 'pointer'}} href="https://github.com/jchiefelk/Node-Express-React-Heroku-Boilerplate">Github.</a>  
                            </p>
                    </div>



			)

		}
	


};

module.exports =  New Tutorial();