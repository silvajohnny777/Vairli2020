import React from 'react'
import { Link } from 'react-router-dom';

    class PageNotFound extends React.Component {

        constructor() {

            super()

            this.state = {



            }

        }

        render() {

            return (

                <div className="pageNotFoundContainer">

                    <div className="pageNotFoundContent">

                        <div className="pageNotFoundTitle">7600</div>

                        <div className="pageNotFoundDescription">

                            Oops! Looks like you have lost communication!

                        </div>

                        <Link className="pageNotFoundButton" to="/">

                            Home

                        </Link>

                    </div>

                </div>

            )

        }

    }

export default PageNotFound;