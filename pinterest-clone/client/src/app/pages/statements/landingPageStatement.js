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
  const [queryImages, setQueryImages] = useState([])
  const carouselImages = {
    0: {
      1: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      2: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      3: 'https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      4: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      5: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      6: 'https://images.unsplash.com/photo-1597633244018-0201d0158aab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      7: 'https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3R5bGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      8: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      9: 'https://images.unsplash.com/photo-1587754256282-a11d04e3472d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1ha2V1cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      10: 'https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      11: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      12: 'https://images.unsplash.com/photo-1546536133-d1b07a9c768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      13: 'https://images.unsplash.com/photo-1576827471288-0a8f6d6c937b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTExfHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    1: {
      1: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      2: 'https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      3: 'https://images.unsplash.com/photo-1537655780520-1e392ead81f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      4: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      5: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dG95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      6: 'https://images.unsplash.com/photo-1596068587619-e4b11c7a3488?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dG95c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      7: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      8: 'https://images.unsplash.com/photo-1599623560574-39d485900c95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHRveXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      9: 'https://images.unsplash.com/photo-1554343594-1c9d305bd51f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9kZGxlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      10: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      11: 'https://images.unsplash.com/photo-1629822908853-b1d2a39ece98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRvZGRsZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      12: 'https://images.unsplash.com/photo-1555009393-f20bdb245c4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      13: 'https://images.unsplash.com/photo-1537440499989-de5f6b6854de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
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

  const getItemById = (index, img) => {
    const image = $(`#carousel-image-${index}-${img}`)

    return image
  }

  const getFade = element => {
    const classes = element.attr('class').split(/\s+/)
    element.removeClass()
    element.width()
    element.addClass(classes)
  }

  const handleIndex = index => {
    setIndex(index)
    setQueryImages([])

    const carouselsubtitle = $('#carousel-subtitle')

    getFade(carouselsubtitle)

    const imagesKey = Object.keys(carouselImages[index])

    imagesKey.map(img =>
      setQueryImages(prevState => [...prevState, getItemById(index, img)])
    )
  }

  return {
    loginValues,
    subtitles,
    render,
    setRender,
    index,
    queryImages,
    carouselImages,
    setIndex,
    serverError,
    dispatch,
    getFade,
    handleIndex
  }
}
