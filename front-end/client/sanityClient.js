import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId : 'hxy41lw4',
    dataset : 'production',
    apiVersion : 'v1',
    token : 'skV4s4fRIS5qwg5QTKIxqePi9m6EJudM1qCgd9CeKM66OTOjdxkPWW1L6sA9vTGATpktEjIPlTqzylu6rCR5rI7pRLqkxdPBmWqXMMHzstyIy0E6EmJ0Qfz5FFALYMB87VVcMGvkOdatfeG9xtGeeWPjjciYMXMl2x0gQd9Hcxw6pkJ91bJ6',
    useCdn : false
})