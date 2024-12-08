import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '../data'
const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            {gridItems.map(({id, title, description, className, 
            img, titleClassName}) => (
                <BentoGridItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    titleClassName={titleClassName}
                    />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid;