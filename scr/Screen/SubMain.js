import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native'

export default function SubMain() {
    const [title, settitle] = useState('')
    const [company, setCompany] = useState('')
    const [year, setyear] = useState('')
    const [location, setlocation] = useState('')
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>About</Text>
                <InputText txt='Current Title' place='Current Title' onchange={(text) => settitle(text)} />
                <InputText txt='Current Company' place='Current Title' onchange={(text) => setCompany(text)} />
                <InputText txt='Total Year of Experience' place='Current Title' onchange={(text) => setyear(text)} />
                <InputText txt='Location' place='Current Title' onchange={(text) => setlocation(text)} />
            </View>
        </ScrollView>
    )
}

const InputText = ({ place, txt, onChange, value }) => {
    return (
        <View>
            <Text style={styles.txxt}>{txt}</Text>
            <TextInput
                // placeholder={place}
                onChange={onChange}
                value={value}
                underlineColorAndroid={'#F8F8F8'}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        width: 370,
        height: 400,
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 30
    },
    input: {
        // marginTop: 10
    },
    txxt: {
        color: '#b6b7b8',
        marginTop: 7.5,
        fontSize: 15,
    }

})