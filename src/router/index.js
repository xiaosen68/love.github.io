/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Blog from '@/views/blog'
import Music from '@/views/music'
import Story from '@/views/story'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    }, 
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/story',
      name: 'Story',
      component: Story
    }
  ]
})
