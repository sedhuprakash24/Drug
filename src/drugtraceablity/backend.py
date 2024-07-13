import mysql.connector
from web3 import Web3
from flask_cors import CORS
from flask import *
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
from solcx import compile_standard, install_solc

def connect():
    return mysql.connector.connect(host="localhost", user="root",  password="",  database="drugtracablity",port="3306",auth_plugin = 'mysql_native_password')
@app.route('/drugtracablity/insertdistributer', methods=["POST"], strict_slashes=False)
def insertdistributer():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = 'select did from distributer order by did desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()
    if len(e) == 0:
        eid = 1
    else:
        eid = int(e[0][0][1:])+1
    eid = 'd'+str(eid)
    d = "insert into distributer(did,dname,mobile,blockchainaddress,privatekey,password)values ('%s','%s','%s','%s','%s','%s')" % (
        eid, r['name'], r['mobile'], r['blockchainaddress'], r['privatekey'], r['password'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 'e'


@app.route('/drugtracablity/updatedistributer', methods=["POST"], strict_slashes=False)
def updatedistributer():
    r = request.json
    mydb = connect()
    d = "update distributer set dname ='%s',mobile ='%s',blockchainaddress ='%s',privatekey ='%s',password ='%s' where did='%s'" % (
        r['dname'], r['mobile'], r['blockchainaddress'], r['privatekey'], r['password'], r['did'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/viewdistributer', methods=["POST"], strict_slashes=False)
def viewdistributer():
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from distributer"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/deletedistributer', methods=["POST"], strict_slashes=False)
def deletedistributer():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "delete from distributer where did={0}".format(r['id'])
    mycursor.execute(tx)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/insertdruglot', methods=["POST"], strict_slashes=False)
def insertdruglot():
    r = request.json
    print(r)
    mydb = connect()

    mycursor = mydb.cursor()
    tx = 'select drugid from druglot order by drugid desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()
    if len(e) == 0:
        eid = 1
    else:
        eid = int(e[0][0][1:])+1
    eid = 'g'+str(eid)
    d = "insert into druglot(drugid,drugname,owners,iid)values ('%s','%s','%s','%s')" % (
        eid, r['drugname'], r['owners'], r['iid'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mycursor = mydb.cursor()
    tx = 'select * from manufacture where mid="%s"' % (r["owners"])
    mycursor.execute(tx)
    e = mycursor.fetchone()
    x = smartcontract(e[3], e[4])
    x = {"drugid_id": r["iid"], "senderid": r["iid"],
         'receiver': eid, 'transaddress': x, 'remark': "drugcreated"}
    inserteachtransaction(x)
    mydb.close()
    return 'e'


@app.route('/drugtracablity/updatedruglot', methods=["POST"], strict_slashes=False)
def updatedruglot():
    r = request.json
    mydb = connect()
    d = "update druglot set drugname ='%s',owners ='%s',iid ='%s' where drugid='%s'" % (
        r['drugname'], r['owners'], r['iid'], r['drugid'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/viewdruglot', methods=["POST"], strict_slashes=False)
def viewdruglot():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from druglot where owners='%s'" % (r['id'])
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/viewdrugcheck', methods=["POST"], strict_slashes=False)
def viewdrugcheck():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select * from transaction where drugid_id='%s' or drugid_id in(select drugid_id from transaction where remark='drugcreated' and receiver='%s')" % (
        r['drug'], r['drug'])
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/viewdrugloteach', methods=["POST"], strict_slashes=False)
def viewdrugloteach():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from druglot where owners='%s'" % (r["id"])
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/deletedruglot', methods=["POST"], strict_slashes=False)
def deletedruglot():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "delete from druglot where drugid='{0}'".format(r['id'])
    mycursor.execute(tx)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/insertingredient', methods=["POST"], strict_slashes=False)
def insertingredient():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = 'select iid from ingredient order by iid desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()

    if len(e) == 0:
        eid = 1
    else:
        eid = int(e[0][0][1:])+1
    eid = 'i'+str(eid)
    d = "insert into ingredient(iid,ingredientname,status,ownerid)values ('%s','%s','%s','%s')" % (
        eid, r['ingredientname'], r['status'], r["owner"])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 'e'


@app.route('/drugtracablity/updateingredient', methods=["POST"], strict_slashes=False)
def updateingredient():
    r = request.json
    mydb = connect()
    d = "update ingredient set ingredientname ='%s',status ='%s' where iid='%s'" % (
        r['ingredientname'], r['status'], r['iid'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


def inserteachtransaction(r):
    mydb = connect()
    mycursor = mydb.cursor()
    tx = 'select tid from transaction order by tid desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()
    if len(e) == 0:
        eid = 1
    else:
        eid = int(e[0][0])+1
    d = "insert into transaction(tid,drugid_id,senderid,transaddress,remark,receiver)values ('%s','%s','%s','%s','%s','%s')" % (
        eid, r['drugid_id'], r['senderid'], r['transaddress'], r['remark'], r['receiver'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()


def smartcontract(x, r):
    
    install_solc("0.6.0")
    with open("./SimpleStorage.sol", "r") as file:
        simple_storage_file = file.read()
    compiled_sol = compile_standard(
        {
            "language": "Solidity",
            "sources": {"SimpleStorage.sol": {"content": simple_storage_file}},
            "settings": {
                "outputSelection": {
                    "*": {
                        "*": ["abi", "metadata", "evm.bytecode", "evm.bytecode.sourceMap"]
                    }
                }
            },
        },
        solc_version="0.6.0",
    )
    with open("compiled_code.json", "w") as file:
        json.dump(compiled_sol, file)
    bytecode = compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["evm"]["bytecode"]["object"]
    # get abi
    abi = json.loads(
        compiled_sol["contracts"]["SimpleStorage.sol"]["SimpleStorage"]["metadata"]
    )["output"]["abi"]
    
    w3 = Web3(Web3.HTTPProvider('HTTP://127.0.0.1:7545'))
    chain_id = 1337
    print(w3.is_connected())
    my_address = x
    # initialize contract
    SimpleStorage = w3.eth.contract(abi=abi, bytecode=bytecode)
    nonce = w3.eth.get_transaction_count(my_address)
    # set up transaction from constructor which executes when firstly
    transaction = SimpleStorage.constructor().build_transaction(
        {"chainId": chain_id, "from": my_address, "nonce": nonce}
    )
    signed_tx = w3.eth.account.sign_transaction(
        transaction, private_key=r)
    tx_hash = w3.eth.send_raw_transaction(signed_tx.rawTransaction)
    tx_receipt = w3.eth.wait_for_transaction_receipt(tx_hash)
    tx_receipt = "".join(["{:02X}".format(b)
                         for b in tx_receipt["transactionHash"]])
    return tx_receipt


def transaction(r, e, x):
    
    we = Web3(Web3.HTTPProvider('HTTP://127.0.0.1:7545'))
    print(we.is_connected())
    account_1 = r
    account_2 = e
    private_key2 = x
    nonce = we.eth.get_transaction_count(account_2)
    # build a transaction in a dictionary
    tx = {
        'nonce': nonce,
        'to': account_1,
        # One ether = 1,000,000,000,000,000,000 wei (10e18)
        'value': 1000000000000000000,
        'gas': 200000,
        'gasPrice': 20000000000
    }

    # sign the transaction
    signed_tx = we.eth.account.sign_transaction(tx, private_key2)

    # send transaction
    tx_hash = we.eth.send_raw_transaction(signed_tx.rawTransaction)

    # get transaction hash
    print("transaction hash", tx_hash)
    tx_receipt = we.eth.wait_for_transaction_receipt(tx_hash)
    tx_receipt = "".join(["{:02X}".format(b)
                         for b in tx_receipt["transactionHash"]])
    return tx_receipt


@app.route('/drugtracablity/transferingredient', methods=["POST"], strict_slashes=False)
def transferingredient():
    r = request.json
    print(r)
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from ingredient_supplier where sid='%s'" % (r["or"])
    mycursor.execute(tx)
    e = mycursor.fetchone()

    mycursor = mydb.cursor()
    tx = "select *   from manufacture where mid='%s'" % (r["owner"])
    mycursor.execute(tx)
    rx = mycursor.fetchone()
    n = transaction(rx[3], e[3], e[4])
    print(n)
    x = {"drugid_id": r["ingredientname"], "senderid": r["or"],
         'receiver': r["owner"], 'transaddress': n, 'remark': "transferingredient"}
    inserteachtransaction(x)
    d = "update ingredient set ownerid ='%s' where iid='%s'" % (
        r["owner"], r['ingredientname'])
    print(d)
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/transferdisbuter', methods=["POST"], strict_slashes=False)
def transferdisbuter():
    r = request.json

    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from manufacture where mid='%s'" % (r["or"])
    mycursor.execute(tx)
    e = mycursor.fetchone()

    mycursor = mydb.cursor()
    tx = "select *   from distributer where did='%s'" % (r["owner"])
    mycursor.execute(tx)
    rx = mycursor.fetchone()

    n = transaction(rx[3], e[3], e[4])

    x = {"drugid_id": r["ingredientname"], "senderid": r["or"],
         'receiver': r["owner"], 'transaddress': n, 'remark': "transfertodisbuter"}
    inserteachtransaction(x)
    d = "update druglot set owners ='%s' where drugid='%s'" % (
        r["owner"], r['ingredientname'])
    print(d)
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/transferparmacy', methods=["POST"], strict_slashes=False)
def transferparmacy():
    r = request.json

    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from distributer where did='%s'" % (r["or"])
    mycursor.execute(tx)
    e = mycursor.fetchone()
    print(e)
    mycursor = mydb.cursor()
    tx = "select *   from pharmacy where pid='%s'" % (r["owner"])
    mycursor.execute(tx)
    rx = mycursor.fetchone()
    print(rx)
    n = transaction(rx[2], e[3], e[4])

    x = {"drugid_id": r["ingredientname"], "senderid": r["or"],
         'receiver': r["owner"], 'transaddress': n, 'remark': "transfertopharmacy"}
    inserteachtransaction(x)
    d = "update druglot set owners ='%s' where drugid='%s'" % (
        r["owner"], r['ingredientname'])
    print(d)
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/approvalingredient', methods=["POST"], strict_slashes=False)
def approvalingredient():
    r = request.json
    print(r)
    mydb = connect()
    d = "update ingredient set status ='%s' where iid='%s'" % (
        'requested', r['ingredientname'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/approveingredient', methods=["POST"], strict_slashes=False)
def approveingredient():
    r = request.json
    print(r)
    mydb = connect()
    d = "update ingredient set status ='%s' where iid='%s'" % (
        r['status'], r['id'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    d = "select * from manufacture where mid=(select ownerid from ingredient where iid='%s')" % (
        r['id'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    y = mycursor.fetchone()
    t = smartcontract(y[3], y[4])
    mycursor = mydb.cursor()
    tx = 'select tid from transaction order by tid desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()
    if len(e) == 0:
        eid = 1
    else:
        eid = int(e[0][0])+1
    d = "insert into transaction(tid,drugid_id,senderid,transaddress,remark,receiver)values ('%s','%s','%s','%s','%s','%s')" % (
        eid, r['id'], "FDA",  t, 'approve', y[0])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    mydb.close()
    return 's'


@app.route('/drugtracablity/viewingredient', methods=["POST"], strict_slashes=False)
def viewingredient():
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from ingredient"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/viewingredientapprove', methods=["POST"], strict_slashes=False)
def viewingredientapprove():
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from ingredient where status='requested'"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    print(e)
    return json.dumps(e)


@app.route('/drugtracablity/viewingredienteach', methods=["POST"], strict_slashes=False)
def viewingredienteach():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from ingredient where ownerid='%s'" % (r["id"])
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/deleteingredient', methods=["POST"], strict_slashes=False)
def deleteingredient():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "delete from ingredient where iid={0}".format(r['id'])
    mycursor.execute(tx)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/insertingredient_supplier', methods=["POST"], strict_slashes=False)
def insertingredient_supplier():
    r = request.json
    print(r)
    mydb = connect()
    mycursor = mydb.cursor()
    tx = 'select sid from ingredient_supplier order by sid desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()
    if len(e) == 0:
        eid = 1
    else:
        eid = int(e[0][0][1:])+1
    eid = 's'+str(eid)
    d = "insert into ingredient_supplier(sid,sname,mobile,blockchainaddress,privatekey,password)values ('%s','%s','%s','%s','%s','%s')" % (
        eid, r['name'], r['mobile'], r['blockchainaddress'], r['privatekey'], r['password'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 'e'


@app.route('/drugtracablity/updateingredient_supplier', methods=["POST"], strict_slashes=False)
def updateingredient_supplier():
    r = request.json
    mydb = connect()
    d = "update ingredient_supplier set sname ='%s',mobile ='%s',blockchainaddress ='%s',privatekey ='%s',password ='%s' where sid='%s'" % (
        r['sname'], r['mobile'], r['blockchainaddress'], r['privatekey'], r['password'], r['sid'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/viewingredient_supplier', methods=["POST"], strict_slashes=False)
def viewingredient_supplier():
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from ingredient_supplier"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/deleteingredient_supplier', methods=["POST"], strict_slashes=False)
def deleteingredient_supplier():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "delete from ingredient_supplier where sid={0}".format(r['id'])
    mycursor.execute(tx)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/insertmanufacture', methods=["POST"], strict_slashes=False)
def insertmanufacture():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = 'select mid from manufacture order by mid desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()
    if len(e) == 0:
        eid = 1
    else:
        eid = int(e[0][0][1:])+1
    eid = 'm'+str(eid)
    d = "insert into manufacture(mid,Manufacturename,mobile,blockchainaddress,privatekey,password)values ('%s','%s','%s','%s','%s','%s')" % (
        eid, r['name'], r['mobile'], r['blockchainaddress'], r['privatekey'], r['password'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 'e'


@app.route('/drugtracablity/updatemanufacture', methods=["POST"], strict_slashes=False)
def updatemanufacture():
    r = request.json
    mydb = connect()
    d = "update manufacture set Manufacturename ='%s',mobile ='%s',blockchainaddress ='%s',privatekey ='%s',password ='%s' where mid='%s'" % (
        r['Manufacturename'], r['mobile'], r['blockchainaddress'], r['privatekey'], r['password'], r['mid'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/viewmanufacture', methods=["POST"], strict_slashes=False)
def viewmanufacture():
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from manufacture"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/deletemanufacture', methods=["POST"], strict_slashes=False)
def deletemanufacture():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "delete from manufacture where mid={0}".format(r['id'])
    mycursor.execute(tx)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/insertpatient', methods=["POST"], strict_slashes=False)
def insertpatient():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = 'select pid from patient order by pid desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()

    if len(e) == 0:
        eid = 1
    else:
        eid = int(e[0][0][1:])+1
    eid = 'p'+str(eid)
    d = "insert into patient(pid,patientname,blockchain,privatekey,password,mobile)values ('%s','%s','%s','%s','%s','%s')" % (
        eid, r['name'], r['blockchainaddress'], r['privatekey'], r['password'], r['mobile'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 'e'


@app.route('/drugtracablity/updatepatient', methods=["POST"], strict_slashes=False)
def updatepatient():
    r = request.json
    mydb = connect()
    d = "update patient set patientname ='%s',blockchain ='%s',privatekey ='%s',password ='%s',mobile ='%s' where pid='%s'" % (
        r['patientname'], r['blockchain'], r['privatekey'], r['password'], r['mobile'], r['pid'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/viewpatient', methods=["POST"], strict_slashes=False)
def viewpatient():
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from patient"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/deletepatient', methods=["POST"], strict_slashes=False)
def deletepatient():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "delete from patient where pid={0}".format(r['id'])
    mycursor.execute(tx)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/insertpharmacy', methods=["POST"], strict_slashes=False)
def insertpharmacy():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = 'select pid from pharmacy order by pid desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()
    if len(e) == 0:
        eid = 1
    else:
        eid = int(e[0][0][1:])+1
    eid = 'p'+str(eid)
    d = "insert into pharmacy(pid,pharmacyname,blockchainaddress,privatekey,password,mobile)values ('%s','%s','%s','%s','%s','%s')" % (
        eid, r['name'], r['blockchainaddress'], r['privatekey'], r['password'], r['mobile'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 'e'


@app.route('/drugtracablity/updatepharmacy', methods=["POST"], strict_slashes=False)
def updatepharmacy():
    r = request.json
    mydb = connect()
    d = "update pharmacy set pharmacyname ='%s',blockchainaddress ='%s',privatekey ='%s',password ='%s',mobile ='%s' where pid='%s'" % (
        r['pharmacyname'], r['blockchainaddress'], r['privatekey'], r['password'], r['mobile'], r['pid'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/viewpharmacy', methods=["POST"], strict_slashes=False)
def viewpharmacy():
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from pharmacy"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/deletepharmacy', methods=["POST"], strict_slashes=False)
def deletepharmacy():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "delete from pharmacy where pid={0}".format(r['id'])
    mycursor.execute(tx)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/inserttransaction', methods=["POST"], strict_slashes=False)
def inserttransaction():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = 'select tid from transaction order by tid desc limit 1'
    mycursor.execute(tx)
    e = mycursor.fetchall()
    if len(e) == 0:
        eid = 1
    else:
        eid = e[0][0]+1
    d = "insert into transaction(tid,drugid_id,senderid,transactiondate,transaddress,remark,receiver)values ('%s','%s','%s','%s','%s','%s','%s')" % (
        eid, r['drugid_id'], r['senderid'], r['transactiondate'], r['transaddress'], r['remark'], r['receiver'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 'e'


@app.route('/drugtracablity/updatetransaction', methods=["POST"], strict_slashes=False)
def updatetransaction():
    r = request.json
    mydb = connect()
    d = "update transaction set drugid_id ='%s',senderid ='%s',transactiondate ='%s',transaddress ='%s',remark ='%s',receiver ='%s' where tid='%s'" % (
        r['drugid_id'], r['senderid'], r['transactiondate'], r['transaddress'], r['remark'], r['receiver'], r['tid'])
    mycursor = mydb.cursor()
    mycursor.execute(d)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/viewtransaction', methods=["POST"], strict_slashes=False)
def viewtransaction():
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "select *   from transaction"
    mycursor.execute(tx)
    e = mycursor.fetchall()
    mydb.close()
    return json.dumps(e)


@app.route('/drugtracablity/deletetransaction', methods=["POST"], strict_slashes=False)
def deletetransaction():
    r = request.json
    mydb = connect()
    mycursor = mydb.cursor()
    tx = "delete from transaction where tid={0}".format(r['id'])
    mycursor.execute(tx)
    mydb.commit()
    mydb.close()
    return 's'


@app.route('/drugtracablity/login', methods=["POST"], strict_slashes=False)
def login():
    r = request.json

    n = 0
    if (r["person"] == "Ingredient_supplier"):
        mydb = mysql.connector.connect(
            host="localhost", user="root",  password="",  database="drugtracablity")
        mycursor = mydb.cursor()
        tx = "select * from ingredient_supplier where sname='%s' and password='%s'" % (
            r["name"], r["pass"])
        mycursor.execute(tx)
        n = mycursor.fetchone()
        mydb.commit()
        mydb.close()
    elif (r["person"] == "Manufacture"):
        mydb = mysql.connector.connect(
            host="localhost", user="root",  password="",  database="drugtracablity")
        mycursor = mydb.cursor()
        tx = "select * from manufacture where Manufacturename='%s' and password='%s'" % (
            r["name"], r["pass"])
        mycursor.execute(tx)
        n = mycursor.fetchone()
        mydb.commit()
        mydb.close()
    elif (r["person"] == "Distributer"):
        mydb = mysql.connector.connect(
            host="localhost", user="root",  password="",  database="drugtracablity")
        mycursor = mydb.cursor()
        tx = "select * from distributer where dname='%s' and password='%s'" % (
            r["name"], r["pass"])
        mycursor.execute(tx)
        n = mycursor.fetchone()
        mydb.commit()
        mydb.close()
    elif (r["person"] == "Pharmacy"):
        mydb = mysql.connector.connect(
            host="localhost", user="root",  password="",  database="drugtracablity")
        mycursor = mydb.cursor()
        tx = "select * from Pharmacy where pharmacyname='%s' and password='%s'" % (
            r["name"], r["pass"])
        mycursor.execute(tx)
        n = mycursor.fetchone()
        mydb.commit()
        mydb.close()
    elif (r["person"] == "Patient"):
        mydb = mysql.connector.connect(
            host="localhost", user="root",  password="",  database="drugtracablity")
        mycursor = mydb.cursor()
        tx = "select * from patient where patientname='%s' and password='%s'" % (
            r["name"], r["pass"])
        mycursor.execute(tx)
        n = mycursor.fetchone()
        mydb.commit()
        mydb.close()
    return json.dumps(n)


if __name__ == '__main__':
    app.run()
