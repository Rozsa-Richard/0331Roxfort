import wizards from '../wizards.js'

export const getAllWizzard = (req, res) =>{
    res.status(200).json(wizards)
}

export const getWizzardById = (req, res) =>{
    const id = req.params.id
    if (id < 0 || id >= wizards.length) {
        return res.status(404).json({message: 'Wizzard not found'})
    }
    res.status(200).json(wizards[id])
}

export const createWizzard = (req, res) => {
    const wizard = req.body
    if (!wizard.name || !wizard.magicWand || !wizard.house){
        return res.status(400).json({messege:'Invalid data'})
    }
    wizards.push(wizard)
    res.status(200).json(wizard)
}
    
export const updateWizzard =(req, res) => {
    const id = req.params.id
    if (id > wizards.length -1|| id<0){
        return res.json({messege:'Wizzard not found'})
    }
    else {
        const wizard = req.body
        if (!wizard.name || !wizard.magicWand || !wizard.house){
            return res.status(400).json({messege:'Invalid data'})
        }
        wizards[id] = wizard
        res.status(200).json(wizard)
    }
}

export const deleteWizzard = (req, res) => {
    const id = req.params.id
    if (id > wizards.length -1|| id<0){
        return res.json({messege:'Wizzard not found'})
    }
    else{
        wizards.splice(id,1)
        res.status(200).json({messege:'Wizzard deleted'})
    }
}