# Use a base image with Java 21 (if available)
FROM openjdk:21-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the compiled Spring Boot JAR file into the container
COPY target/tutor-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that the application will run on
EXPOSE 8081

# Define the default command to run your application
CMD ["java", "-jar", "app.jar"]
