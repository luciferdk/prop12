     FROM node:20  

     #set the working directory
	 WORKDIR /app     
	 
     # Copy the rest of the application code
     COPY . .    
	 
     #install dependincy
     RUN npm install  
     RUN npm install axios
	 
     #Build the application
     RUN npm run build
     #install the serve globally
     RUN npm install -g serve

     #Expose port 3000
	 EXPOSE 3000
	 
     #command to run the application
     CMD ["serve", "-s", "build"] 