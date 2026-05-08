function curriedDomain(http) {
    return function(example) {
      return function(com) {
        return `${http}://${example}.${com}`
      }
    }
}

const url = curriedDomain('http')('example')('com')
console.log(url)
/*
const protocolSetter = curriedDomain('https')
const domainNameSetter = protocolSetter('example')
const fullDomain = domainNameSetter('com')
console.log('Full Domain:', fullDomain)
*/