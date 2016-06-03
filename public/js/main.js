import $ from 'jquery'
import 'jquery.scrollto'
import './jquery.homeycombs'
import 'jquery.easing'

$(document).ready(() => {
  $('.honeycombs').honeycombs({
    combWidth: 220,
    margin: 10
  })

  const scrollTo = (to) => {
    $.scrollTo(to, 1000, { easing:'easeInOutExpo', offset:0, 'axis':'y' })
  }

  $('.home--btn').click((e) => {
    console.log('Clicked')
    scrollTo('body')
  })

  $('.about--btn').click((e) => {
    scrollTo('#about')
  })

  $('.team--btn').click((e) => {
    scrollTo('#team')
  })
})
