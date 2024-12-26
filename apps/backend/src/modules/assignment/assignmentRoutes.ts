import express from 'express';

const router=express.Router();

router.get('/list',(req,res)=>{
    res.send('Hello world');
});

router.post('/create',(req,res)=>{
    console.log(req.body);
    res.send('Created new assignment attempt');
});

export default router;
