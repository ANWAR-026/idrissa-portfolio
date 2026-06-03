# Idirissa Portfolio

A professional full-stack portfolio website for Idirissa.

## Project Structure

```
idrissa-portfolio/
├── backend/              # Node.js/Express API for Render deployment
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── app.js
│   │   └── index.js
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   ├── docker-compose.yml
│   └── README.md
├── frontend/             # Static frontend for Vercel deployment
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── vercel.json
│   └── README.md
├── QUICKSTART.md        # Quick start guide
└── README.md
```

## Getting Started

### Backend Setup

1. Navigate to backend folder
2. Install dependencies: `npm install`
3. Create `.env` from `.env.example`
4. Start server: `npm run dev`

### Frontend Setup

1. Navigate to frontend folder
2. Deploy to Vercel as a static site
3. Set `apiBaseUrl` in `frontend/script.js` to your Render backend URL, e.g. `https://<your-render-app>.onrender.com/api`

See [QUICKSTART.md](./QUICKSTART.md) for detailed instructions.

## Technologies

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Tools:** Nodemon (development), Docker
- **Deployment:** Railway, Render, Heroku, DigitalOcean, AWS

### Frontend (Coming Soon)
- React or Vue.js
- Tailwind CSS
- Responsive design

## Deployment

**Backend is ready to deploy!** See [backend/DEPLOYMENT.md](./backend/DEPLOYMENT.md) for deployment options.

### Quick Deploy Options:
1. **Railway.app** - Recommended, easiest
2. **Render** - Free tier available
3. **Heroku** - Using Procfile
4. **Vercel** - Serverless
5. **DigitalOcean** - Platform as a Service

## Features

✅ Clean architecture  
✅ RESTful API  
✅ CORS enabled  
✅ Docker ready  
✅ Production configuration  
✅ Error handling  
✅ Input validation  
✅ Environment management  

## Next Steps

1. ✅ Backend setup complete
2. 📦 Deploy backend to production
3. 🎨 Build React/Vue frontend
4. 🔗 Connect frontend to API
5. 🚀 Full deployment

## Support

For issues or questions, check the relevant README files:
- Backend: [backend/README.md](./backend/README.md)
- Deployment: [backend/DEPLOYMENT.md](./backend/DEPLOYMENT.md)

---

Created with ❤️ for Idirissa
