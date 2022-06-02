import $ from 'jquery'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const Statement = () => {
  // states

  const loginValues = { email: '', password: '' }
  const subtitles = [
    'outfits ideas',
    'activity for kids',
    'ideas for special dinner',
    'DIY projects'
  ]
  const [render, setRender] = useState('login')
  const [index, setIndex] = useState(0)
  const carouselImages = {
    0: {
      1: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      2: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      3: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      4: 'https://images.unsplash.com/photo-1617551307538-c9cdb9d71289?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      5: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      6: 'https://images.unsplash.com/photo-1597633244018-0201d0158aab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      7: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3R5bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      8: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      9: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      10: 'https://images.unsplash.com/photo-1557777586-f6682739fcf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      11: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      12: 'https://images.unsplash.com/photo-1546536133-d1b07a9c768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      13: 'https://images.unsplash.com/photo-1597633125097-5a9961e1f03d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    1: {
      1: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      2: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: ''
    },
    2: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: ''
    },
    3: {
      1: '',
      2: '',
      3: '',
      4: '',
      5: '',
      6: '',
      7: '',
      8: '',
      9: '',
      10: '',
      11: '',
      12: '',
      13: ''
    }
  }

  // hooks

  const serverError = useSelector(state => state.auth.error)
  const dispatch = useDispatch()

  // management

  const handleIndex = index => {
    setIndex(index)
    const element = $('#subtitle')
    var classList = element.attr('class').split(/\s+/)

    element.removeClass()

    element.width()

    classList.map(classname => element.addClass(classname))
  }

  return {
    loginValues,
    subtitles,
    render,
    setRender,
    index,
    carouselImages,
    setIndex,
    serverError,
    dispatch,
    handleIndex
  }
}
