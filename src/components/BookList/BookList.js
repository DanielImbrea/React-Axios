import React from 'react'

const BookList = (props) => {
  return (
    <div className="booklist">
      {this.props.items.map(item => <li>{item}</li>)}
    </div>
  )
}

export default BookList
