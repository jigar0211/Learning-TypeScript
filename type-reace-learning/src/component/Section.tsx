import React from 'react'
type SectionProps = {
  title?: string,
  children: any
}

const Section = ({ children, title = "My SubHeading"}: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  )
}
export default Section