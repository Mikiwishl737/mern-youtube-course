const {Router} = require('express')
const {check, validationResult} = require('express-validator')
const Product = require('../models/Product')
const router = Router()




// product/api//register
router.post(
  '/register',
  [
    check('ID', 'Некорректный ID').isLength({ min: 1 }),
    check('name', 'Минимальная длина имени 1 символ')
      .isLength({ min: 1 }),
    check('surname', 'Минимальная длина фамилии 1 символ')
      .isLength({ min: 1 }),
    check('telephone', 'Минимальная длина фамилии 1 символ')
      .isLength({ min: 1 }),
    check('section', 'Минимальная длина фамилии 1 символ')
      .isLength({ min: 1 }),

  ],
  async (req, res) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Некорректный данные при регистрации'
      })
    }

    const {ID, name, surname, telephone, section, updated, updated2} = req.body

    const candidate = await Product.findOne({ ID })

    if (candidate) {
      return res.status(400).json({ message: 'Такой пользователь уже существует' })
    }

    
    const product = new Product({ ID, name, surname, telephone, section, updated, updated2 })

    await product.save()

    res.status(201).json({ message: 'Пользователь создан' })

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
})

// /api/auth/login

module.exports = router