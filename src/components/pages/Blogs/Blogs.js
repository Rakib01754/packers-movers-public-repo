import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='p-5 mt-5'>
            <h1 className='text-center text-5xl font-bold underline text-orange-600 my-6'>Blogs</h1>
            <div className="text-black my-12">
                <div className="container max-w-4xl px-10 py-6 mx-auto">
                    <div className="mt-3 border-2 p-4 border-orange-200 shadow-lg rounded-lg">
                        <h5 className="text-3xl font-bold hover:underline">Difference between SQL and NoSQL</h5>
                        <table class="border-separate border-spacing-2 border border-slate-400 w-full">
                            <thead>
                                <tr className='bg-gray-600 text-white'>
                                    <th class="border border-slate-300 py-4">SQL</th>
                                    <th class="border border-slate-300 py-4">NOSQL</th>
                                </tr>
                            </thead>
                            <tbody className='font-semibold'>
                                <tr>
                                    <td class="border border-slate-300">RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                    <td class="border border-slate-300">Non-relational or distributed database system.</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-300">These databases have fixed or static or predefined schema</td>
                                    <td class="border border-slate-300">They have dynamic schema</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-300">These databases are best suited for complex queries</td>
                                    <td class="border border-slate-300">These databases are not so good for complex queries</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-300">Follows ACID property</td>
                                    <td class="border border-slate-300">Follows CAP(consistency, availability, partition tolerance)</td>
                                </tr>
                                <tr>
                                    <td class="border border-slate-300">Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</td>
                                    <td class="border border-slate-300">Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-3  border-2 p-4 border-orange-200 shadow-lg rounded-lg">
                        <h2 className="text-3xl font-bold hover:underline">What is JWT, and how does it work?</h2>
                        <h4 className='text-2xl font-semibold py-3 underline'>What is JWT?</h4>
                        <p className="mt-2">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>

                        <h5 className='text-2xl font-semibold py-3 underline'>How Does it Work</h5>
                        <p className='px-5'>
                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                            A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                            Once decoded, you will get two JSON strings:

                            The header and the payload.
                            The signature.
                            The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                            The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                            There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                            The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.
                        </p>
                    </div>
                    <div className="mt-3  border-2 p-4 border-orange-200 shadow-lg rounded-lg">
                        <h2 className="text-3xl font-bold hover:underline">What is the difference between javascript and NodeJS?</h2>
                        <div className="mt-2"><p>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language. </p>

                            <p>As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option. </p>

                            <p>2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful. </p>

                            <p> 3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported. </p>

                            <p>4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific. </p>

                            <p>
                                Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.
                            </p>

                            <p>
                                5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.
                            </p>

                            <p>
                                Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.
                            </p>
                        </div>
                    </div>
                    <div className="mt-3  border-2 p-4 border-orange-200 shadow-lg rounded-lg">
                        <h2 className='text-3xl font-bold hover:underline'>How does NodeJS handle multiple requests at the same time?</h2>
                        <p className="mt-2">
                            When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blogs;