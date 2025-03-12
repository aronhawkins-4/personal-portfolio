import type { FAQBlock as FAQBlockProps } from 'src/payload-types'

import { cn } from '@/utilities/ui'
import React from 'react'
import RichText from '@/components/RichText'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type Props = {
  className?: string
} & FAQBlockProps

export const FAQBlock: React.FC<Props> = ({ className, faqs, sectionId, id }) => {
  return (
    <div
      className={cn('py-20 md:py-24 lg:py-32 w-full bg-background', className)}
      {...(sectionId ? { id: sectionId } : { id: `faq-block-${id}` })}
    >
      <div className="container w-full">
        <Accordion
          type="multiple"
          className="bg-background relative border-b-2 border-foreground before:content-[''] before:bg-foreground before:absolute before:-right-1 before:-bottom-1 before:w-full before:h-full before:-z-10"
        >
          {faqs &&
            faqs.length > 0 &&
            faqs.map((faq) => {
              return (
                <AccordionItem
                  key={faq.title}
                  value={faq.title}
                  className="shadow-none border-2 border-b-0 border-foreground"
                >
                  <AccordionTrigger className="py-8 px-4 sm:px-10 text-lg sm:text-2xl font-bold text-left">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-10">
                    <RichText
                      data={faq?.content || {}}
                      className="text-foreground"
                      enableGutter={false}
                    />
                  </AccordionContent>
                </AccordionItem>
              )
            })}
        </Accordion>
      </div>
    </div>
  )
}
