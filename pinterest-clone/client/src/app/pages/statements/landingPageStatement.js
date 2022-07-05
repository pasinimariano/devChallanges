import $ from 'jquery'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Statement = () => {
  // states
  const loginValues = { email: '', password: '' }
  const createValues = { firstname: '', lastname: '', email: '', password: '' }
  const subtitles = [
    'outfits ideas',
    'activity for kids',
    'ideas for special dinner',
    'DIY projects'
  ]
  const [render, setRender] = useState('login')
  const [modalShow, setModalShow] = useState(false)
  const [page, setPage] = useState(0)
  const [queryImages, setQueryImages] = useState([])
  const [animation, setAnimation] = useState(true)
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
      1: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      2: 'https://images.unsplash.com/photo-1616169776580-c86189ee67b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      3: 'https://images.unsplash.com/photo-1605522561233-768ad7a8fabf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      4: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      5: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      6: 'https://images.unsplash.com/photo-1564844536308-50b114a1d946?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      7: 'https://images.unsplash.com/photo-1535473895227-bdecb20fb157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      8: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      9: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      10: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      11: 'https://images.unsplash.com/photo-1606787503066-794bb59c64bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2tpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      12: 'https://images.unsplash.com/photo-1625631980683-825234bfb7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      13: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGlubmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    },
    3: {
      1: 'https://images.unsplash.com/photo-1608613304899-ea8098577e38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGl5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      2: 'https://images.unsplash.com/photo-1611021061285-16c871740efa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3JhZnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      3: 'https://images.unsplash.com/photo-1529854140025-25995121f16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjF8ODM0NTMyMDF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      4: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y3JlYXRpdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      5: 'https://images.unsplash.com/photo-1520420097861-e4959843b682?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBhaW50aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      6: 'https://media.istockphoto.com/photos/boho-wall-mural-made-of-natural-color-cotton-threads-using-macrame-picture-id1327767977?k=20&m=1327767977&s=612x612&w=0&h=R5jCSwj3SfKdiMf5ZOAQI77VUWE13mPsUynHbea1M3g=',
      7: 'https://images.unsplash.com/photo-1510832842230-87253f48d74f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFpbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      8: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGl5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      9: 'https://images.unsplash.com/photo-1593877499575-9d072e63d502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      10: 'https://images.unsplash.com/photo-1572566201797-81b5e325dd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw4MzQ1MzIwMXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      11: 'https://images.unsplash.com/photo-1608752503578-52f35965e3d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGl5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      12: 'https://images.unsplash.com/photo-1623043453741-11aef9cb59b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      13: 'https://images.unsplash.com/photo-1550895030-823330fc2551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjJ8ODM0NTMyMDF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
    }
  }

  // hooks

  const serverError = useSelector(state => state.auth.error)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const handleEffect = () => {
    if (!animation) setAnimation(true)

    setQueryImages([])

    const imagesKey = Object.keys(carouselImages[page])

    imagesKey.map(img =>
      setQueryImages(prevState => [...prevState, getItemById(page, img)])
    )

    const carouselsubtitle = $('#carousel-subtitle')

    getFade(carouselsubtitle)

    setTimeout(() => {
      setAnimation(false)
    }, 4000)

    setTimeout(() => {
      if (page < subtitles.length - 1) {
        setPage(prevState => (prevState += 1))
      } else if (page == subtitles.length - 1) {
        setPage(0)
      }
    }, 6000)
  }

  const scrollTop = () => {
    console.log('scrolling bug')
  }

  return {
    loginValues,
    createValues,
    subtitles,
    render,
    setRender,
    modalShow,
    setModalShow,
    page,
    queryImages,
    animation,
    carouselImages,
    serverError,
    dispatch,
    navigate,
    getFade,
    handleEffect,
    scrollTop
  }
}
