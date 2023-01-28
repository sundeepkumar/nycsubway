FROM python:3.8
WORKDIR /usr/src/app
COPY . .
ADD settings.cfg /
ADD app.py /
ADD requirements.txt /
RUN pip install -r requirements.txt
RUN pip install pystrich
EXPOSE 5000
CMD [ "python", "./app.py" ]