<template>
    <content>
        <v-card-title class="justify-center mt-12 display-1">ニモチの利用規約</v-card-title>
        <v-container>
            <v-row justify="center">
                <v-card tile width="600" height="auto">
                    <v-col>
                        <v-card-title>利用規約</v-card-title>
                        <v-card-text>
                            この利用規約（以下，「本規約」といいます。）は，ニモチ（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。
                            登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
                        </v-card-text>
                        <v-card-title>第1条（適用）</v-card-title>
                        <v-card-text>
                            1.本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。<br/><br/>
                            2.当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。<br/><br/>
                            3.本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
                        </v-card-text>
                    </v-col>
                    <!-- 表示ボタン -->
                    <v-row justify="center" v-if="open == true">
                        <v-btn color="primary" v-on:click="open=!open">表示</v-btn>
                    </v-row>
                    <!-- ここからelse文 -->
                    <v-row justify="center" v-else>
                        <v-col cols="auto">
                            <v-card-title>第2条（利用登録）</v-card-title>
                            <v-card-text>
                                1.本サービスにおいては，登録希望者が本規約に同意の上，当社の定める方法によって利用登録を申請し，当社がこれを承認することによって，利用登録が完了するものとします。<br/><br/>
                                2.当社は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。<br/>
                                ・利用登録の申請に際して虚偽の事項を届け出た場合<br/>
                                ・本規約に違反したことがある者からの申請である場合<br/>
                                ・その他，当社が利用登録を相当でないと判断した場合<br/>
                            </v-card-text>
                            <v-card-title>第3条（ユーザーIDおよびパスワードの管理）</v-card-title>
                            <v-card-text>
                                1.ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。<br/><br/>
                                2.ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。<br/><br/>
                                3.ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，当社に故意又は重大な過失がある場合を除き，当社は一切の責任を負わないものとします。<br/>
                            </v-card-text>
                            <!-- 閉じるbtn -->
                            <v-row justify="center">
                                <v-col cols="auto">
                                    <v-btn color="primary" @click="open=!open">
                                        閉じる
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-card>
            </v-row>
        </v-container>
        <v-card-title class="justify-center mt-12">規約制定日 2020年7月22日</v-card-title>
    </content>
</template>
<script>
export default{
    data() {
        return {
            open:true
        }
    },
}
</script>
