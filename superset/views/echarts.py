# -*- encoding: utf-8 -*-
'''
@Author  :    huangzz
@License :   (C) Copyright 2013-2017, 广联赛讯
@Contact :   huangzz@didihu.com.cn
@Software:   PyCharm
@File    :   echart.py
@Time    :   2018/6/8 14:20
@Desc    :
'''

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

from flask_appbuilder import BaseView, expose

from superset import appbuilder


class EChartsView(BaseView):
    default_view = 'sample'

    @expose('/sample/')
    def sample(self):
        return self.render_template('superset/echarts/echarts_index.html')

    @expose('/message/<string:msg>')
    def message(self, msg):
        msg = 'Hello %s' % (msg)
        return msg

    @expose('/welcome/<string:msg>')
    def welcome(self, msg):
        msg = 'Hello %s' % (msg)
        return self.render_template('index.html',msg = msg)

appbuilder.add_view(EChartsView, "Sample", category='EChart')
appbuilder.add_link("Message", href='/myview/message/john', category='EChart')
appbuilder.add_link("Welcome", href='/myview/welcome/student', category='EChart')
