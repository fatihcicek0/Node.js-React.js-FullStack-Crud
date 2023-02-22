const express=require('express');
const router=express.Router();

const contentController=require('../controllers/content');

router.get('/contents' , contentController.getContents);

router.post('/content',contentController.postContent);

router.get('/content/:contentId',contentController.getContentById);

router.put('/content/:contentId',contentController.updateContent);

router.delete('/content/:contentId',contentController.deleteContent);

router.get('/comments/:contentId',contentController.getCommentsByContentId);

router.post('/content/:contentId/comment',contentController.addComment);

module.exports=router;