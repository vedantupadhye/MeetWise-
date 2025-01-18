"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, Zap, ArrowRight } from 'lucide-react'

export default function Home() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const features = [
    { title: 'Speech to Text', description: 'Automatically transcribe your meeting recordings', icon: Zap },
    { title: 'Smart Summarization', description: 'Get concise summaries of your meetings', icon: Zap },
    { title: 'Action Item Extraction', description: 'Never miss a task or follow-up item', icon: Zap },
    { title: 'Key Points Identification', description: 'Highlight the most important discussion points', icon: Zap },
    { title: 'Sentiment Analysis', description: 'Understand the overall tone of your meetings', icon: Zap },
    { title: 'Export Options', description: 'Download your minutes in Word or PDF format', icon: Zap },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.section 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-4">Transform Your Meetings with AI-Powered Minutes</h1>
        <p className="text-xl mb-8">Generate comprehensive, accurate meeting minutes in seconds</p>
        <Button asChild size="lg">
          <Link href="/dashboard">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </motion.section>

      <motion.section 
        className="mb-16 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="AI-powered meeting analysis"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent flex items-center">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-white mb-4">AI-Powered Insights</h2>
              <p className="text-white text-lg mb-4">Unlock the power of your meetings with our advanced AI technology</p>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="h-full transition-all duration-300 hover:shadow-lg"
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <feature.icon className={`w-6 h-6 mr-2 ${hoveredFeature === index ? 'text-primary' : ''}`} />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section 
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="bg-muted rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Experience the Future of Meeting Management</h2>
            <p className="text-lg mb-4">Our AI-powered platform revolutionizes how you handle meeting minutes, action items, and follow-ups.</p>
            <Button asChild>
              <Link href="/features">Explore All Features</Link>
            </Button>
          </div>
          <div className="md:w-1/2 relative h-64 md:h-96">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="MOM Generator AI in action"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </motion.section>

      {/* <motion.section 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      > */}
        {/* <h2 className="text-3xl font-bold mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Basic', price: '$9.99', features: ['Up to 5 meetings/month', 'Basic summarization', 'Export to PDF'] },
            { name: 'Pro', price: '$19.99', features: ['Unlimited meetings', 'Advanced summarization', 'Export to PDF and Word', 'Action item extraction'] },
            { name: 'Enterprise', price: 'Custom', features: ['All Pro features', 'Custom integrations', 'Dedicated support', 'On-premise deployment option'] },
          ].map((plan, index) => (
            <Card key={index} className={`transition-all duration-300 hover:shadow-lg ${index === 1 ? 'border-primary' : ''}`}>
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription className="text-2xl font-bold">{plan.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-4">Choose Plan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.section> */}

      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-8">Ready to Revolutionize Your Meetings?</h2>
        <Button asChild size="lg">
          <Link href="/dashboard">Get Started Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </motion.section>
    </div>
  )
}

