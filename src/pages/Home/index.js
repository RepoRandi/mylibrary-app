import React from 'react';
import {Text, View, Image, TextInput, ScrollView} from 'react-native';

const Home = () => {
  return (
    <View style={{flex: 1}}>
      {/* Content */}
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        {/* Search Bar */}
        <View
          style={{marginHorizontal: 18, flexDirection: 'row', paddingTop: 15}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              placeholder="Search ?"
              style={{
                borderWidth: 2,
                borderColor: '#E8E8E8',
                borderRadius: 25,
                height: 40,
                backgroundColor: 'white',
                paddingLeft: 45,
                paddingRight: 20,
              }}
            />
            <Image
              style={{position: 'absolute', top: 8, left: 12}}
              source={require('../../assets/iconNavigasi/search.png')}
            />
          </View>
          <View
            style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{position: 'absolute', top: 8, left: 12}}
              source={require('../../assets/iconNavigasi/author-active.png')}
            />
          </View>
        </View>
        {/* Batas Search Bar */}
        {/* Go Book */}
        <View style={{marginHorizontal: 17, marginTop: 8}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#F5F5F5',
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
              borderWidth: 2,
              borderTopColor: '#E8E8E8',
              borderLeftColor: '#E8E8E8',
              borderRightColor: '#E8E8E8',
              borderBottomColor: '#F5F5F5',
              padding: 14,
            }}>
            <Text
              style={{
                color: 'grey',
                fontSize: 25,
                textAlign: 'center',
                textAlignVertical: 'center',
              }}>
              Ayo Membaca!
            </Text>
            <Image
              style={{width: 80, height: 80}}
              source={require('../../assets/iconNavigasi/read.png')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',

              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#FAFAFA',
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
              borderWidth: 2,
              borderTopColor: '#FAFAFA',
              borderLeftColor: '#E8E8E8',
              borderRightColor: '#E8E8E8',
              borderBottomColor: '#E8E8E8',
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 60, height: 60}}
                source={require('../../assets/iconNavigasi/book7.jpg')}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 60, height: 60}}
                source={require('../../assets/iconNavigasi/book8.jpg')}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 60, height: 60}}
                source={require('../../assets/iconNavigasi/book9.jpg')}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: 60, height: 60}}
                source={require('../../assets/iconNavigasi/book10.jpg')}
              />
            </View>
          </View>
        </View>
        {/* Batas Go Book */}
        {/* Category Menu */}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 18,
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 18,
            }}>
            <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/iconNavigasi/go-more.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                Romance
              </Text>
            </View>

            <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/iconNavigasi/go-more.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                Romance
              </Text>
            </View>

            <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/iconNavigasi/go-more.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                Romancesddsdsds
              </Text>
            </View>

            <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/iconNavigasi/go-more.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                Romance
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 18,
            }}>
            <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/iconNavigasi/go-more.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                Romance
              </Text>
            </View>

            <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/iconNavigasi/go-more.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                Romance
              </Text>
            </View>

            <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/iconNavigasi/go-more.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                Romance
              </Text>
            </View>

            <View style={{width: `${100 / 4}%`, alignItems: 'center'}}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{width: 50, height: 50}}
                  source={require('../../assets/iconNavigasi/go-more.png')}
                />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                Romance
              </Text>
            </View>
          </View>
        </View>
        {/* Batas Category Menu  */}
        {/* News */}
        <View style={{height: 17, backgroundColor: '#f2f2f4'}}></View>
        <View>
          <View style={{paddingTop: 16, paddingHorizontal: 18}}>
            <Image
              style={{height: 250, width: '100%', borderRadius: 6}}
              source={require('../../assets/iconNavigasi/book11.jpg')}
            />
          </View>
          <View
            style={{
              paddingTop: 16,
              paddingHorizontal: 20,
              borderBottomColor: '#E8E9ED',
              borderBottomWidth: 2,
              marginBottom: 20,
            }}>
            <View
              style={{
                backgroundColor: '#61A756',
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignSelf: 'flex-end',
                borderRadius: 4,
                marginBottom: 4,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                }}>
                READ
              </Text>
            </View>
          </View>
        </View>
        {/* Batas News */}
      </ScrollView>
      {/* Batas Content */}
      {/* Bottom Menu */}
      <View
        style={{height: 54, backgroundColor: 'white', flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('../../assets/iconNavigasi/home-active.png')}
          />
          <Text style={{fontSize: 10, color: '#43AB4A', marginTop: 4}}>
            Home
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('../../assets/iconNavigasi/book.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Book
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('../../assets/iconNavigasi/author.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Author
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('../../assets/iconNavigasi/genre.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Genre
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{width: 26, height: 26}}
            source={require('../../assets/iconNavigasi/account.png')}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Profile
          </Text>
        </View>
      </View>
      {/* Batas Bottom Menu */}
    </View>
  );
};

export default Home;
