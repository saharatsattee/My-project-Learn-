from flask import Flask , jsonify ,json , request , make_response
app = Flask(__name__)

@app.route('/NaiveBayes',methods=['POST'])
def testjson():

    data = request.get_json()

    name = data['name']
    age = data['age']
    math = data['math']
    plus = math + 2 

    res =  make_response(jsonify({'result' : 'ok' , 'name' : name , 'age' : age, 'math' : plus }),201)
    return res
if __name__ == '__main__':
    app.run(host="0.0.0.0", port=1234, debug= True)


